// import type { MiddlewareHandler } from "hono";

// import { HTTPException } from "hono/http-exception";
// import { Resource } from "sst";

// export const authMiddleware: MiddlewareHandler<{
// 	Variables: {
// 		user: typeof auth.$Infer.Session.user | null;
// 		session: typeof auth.$Infer.Session.session | null;
// 	};
// }> = async (c, next) => {
// 	const imageAnalysisApiKey = Resource.ImageAnalysisApiKey.value;
// 	if (!imageAnalysisApiKey)
// 		throw new HTTPException(500, {
// 			message: "Image analysis API key is not set.",
// 		});

// 	const session = await auth.api.getSession({ headers: c.req.raw.headers });

// 	if (!session) {
// 		c.set("user", null);
// 		c.set("session", null);
// 		throw new HTTPException(401, {
// 			message: "No session found.",
// 		});
// 	}

// 	c.set("user", session.user);
// 	c.set("session", session.session);

// 	return ActorContext.with(
// 		{
// 			type: "user",
// 			properties: {
// 				userId: session.user.id,
// 				auth: {
// 					type: "oauth",
// 					clientId: "NativeApp",
// 				},
// 			},
// 		},
// 		next,
// 	);
// };
