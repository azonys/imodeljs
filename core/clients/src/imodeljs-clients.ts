/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
export * from "./AuthorizationClient";
export * from "./AuthorizedClientRequestContext";
export * from "./Client";
export * from "./ClientsLoggerCategory";
export * from "./ECJsonTypeMap";
export * from "./FileHandler";
export * from "./ImsOidcClient";
export * from "./Request";
export * from "./Token";
export * from "./UserInfo";
export * from "./WsgClient";
export * from "./WsgQuery";

export * from "./oidc/OidcFrontendClient";

/** @docs-package-description
 * The imodeljs-clients package allows sending requests to various CONNECT services.
 *
 * It works both on [backend]($docs/learning/backend/index.md) and [frontend]($docs/learning/frontend/index.md).
 */
/**
 * @docs-group-description Authentication
 * Classes for managing [AccessToken]($clients) used for all requests in other classes.
 */
/**
 * @docs-group-description iTwinServiceClients
 * Classes for communicating with various iTwin services.
 */
/**
 * @docs-group-description Logging
 * Logger categories used by this package.
 */
