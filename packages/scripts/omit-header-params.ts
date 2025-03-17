#!/usr/bin/env tsx

import fs from "node:fs";
import path from "node:path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// Parse command line arguments
const argv = await yargs(hideBin(process.argv))
	.option("input", {
		alias: "i",
		description: "Input filepath to a JSON document",
		type: "string",
		demandOption: true,
	})
	.option("output", {
		alias: "o",
		description: "Output filepath for the processed JSON document",
		type: "string",
	})
	.option("headers", {
		description: "Headers to omit (comma-separated list)",
		type: "string",
	})
	.help()
	.alias("help", "h")
	.example(
		"$0 -i openapi.json -o openapi-processed.json -h Authorization,X-API-Key",
		"Omit Authorization and X-API-Key headers",
	)
	.parse();

// Get the input file path
const inputFilePath = path.resolve(process.cwd(), argv.input);

// Check if the file exists
if (!fs.existsSync(inputFilePath)) {
	console.error(`Error: Input file not found: ${inputFilePath}`);
	process.exit(1);
}

// Parse headers to omit
const headersToOmit = argv.headers
	? argv.headers.split(",").map((h) => h.trim())
	: [];

// Read and parse the JSON file
try {
	const jsonData = JSON.parse(fs.readFileSync(inputFilePath, "utf8"));
	console.log("Successfully loaded JSON data from:", inputFilePath);

	// Process the OpenAPI spec to remove specified header parameters
	if (jsonData.paths && typeof jsonData.paths === "object") {
		processOpenApiPaths(jsonData.paths, headersToOmit);
		console.log(
			`Processed OpenAPI spec, removed header parameters: ${headersToOmit.join(", ") || "none"}`,
		);
	} else {
		console.warn(
			"Warning: The JSON document doesn't appear to be a valid OpenAPI spec (no paths object found)",
		);
	}

	// Write the processed data to output file or stdout
	if (argv.output) {
		const outputFilePath = path.resolve(process.cwd(), argv.output);
		fs.writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2));
		console.log(`Processed OpenAPI spec written to: ${outputFilePath}`);
	} else {
		// Output to stdout
		console.log(JSON.stringify(jsonData, null, 2));
	}
} catch (error) {
	console.error("Error processing JSON file:", error);
	process.exit(1);
}

/**
 * Type definition for OpenAPI parameter
 */
interface OpenApiParameter {
	in: string;
	name: string;
	[key: string]: unknown;
}

/**
 * Process OpenAPI paths to remove specified header parameters
 * @param paths The paths object from the OpenAPI spec
 * @param headersToOmit Array of header names to omit
 */
function processOpenApiPaths(
	paths: Record<string, Record<string, unknown>>,
	headersToOmit: string[],
): void {
	if (headersToOmit.length === 0) return;

	for (const path in paths) {
		const pathItem = paths[path];
		if (typeof pathItem !== "object" || pathItem === null) continue;

		// Process each HTTP method (get, post, put, etc.)
		for (const method in pathItem) {
			const operation = pathItem[method] as Record<string, unknown>;
			if (typeof operation !== "object" || operation === null) continue;

			// Process parameters array if it exists
			if (Array.isArray(operation.parameters)) {
				operation.parameters = operation.parameters.filter(
					(param: OpenApiParameter) => {
						// Keep parameters that are not headers or not in the omit list
						return param.in !== "header" || !headersToOmit.includes(param.name);
					},
				);
			}
		}
	}
}
