/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
/** @packageDocumentation
 * @module Notification
 */

import * as React from "react";
import { ClassNameProps, MessageRenderer } from "@bentley/ui-core";
import { NotifyMessageType } from "./ReactNotifyMessageDetails";

/** @internal */
export interface MessageSpanProps extends ClassNameProps {
  message: NotifyMessageType;
}

/** @internal */
export function MessageSpan(props: MessageSpanProps) {
  return <MessageRenderer {...props} useSpan />;
}

/** @internal */
export function MessageDiv(props: MessageSpanProps) {
  return <MessageRenderer {...props} />;
}
