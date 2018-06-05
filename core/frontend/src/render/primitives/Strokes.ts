/*---------------------------------------------------------------------------------------------
|  $Copyright: (c) 2018 Bentley Systems, Incorporated. All rights reserved. $
 *--------------------------------------------------------------------------------------------*/
/** @module Render */

import { Point3d, Transform } from "@bentley/geometry-core";
import { DisplayParams } from "./DisplayParams";

export class StrokesPrimitivePointList {
  public points: Point3d[];
  public readonly startDistance: number;
  constructor(startDistance: number, points: Point3d[] = []) { this.startDistance = startDistance; this.points = [...points]; }
}

export class StrokesPrimitivePointLists extends Array<StrokesPrimitivePointList> { constructor(...args: StrokesPrimitivePointList[]) { super(...args); } }

export class StrokesPrimitive {
  public readonly displayParams: DisplayParams;
  public readonly isDisjoint: boolean;
  public readonly isPlanar: boolean;
  public strokes: StrokesPrimitivePointLists;

  public static create(params: DisplayParams, isDisjoint: boolean, isPlanar: boolean) {
    return new StrokesPrimitive(params, isDisjoint, isPlanar);
  }

  private constructor(params: DisplayParams, isDisjoint: boolean, isPlanar: boolean) {
    this.displayParams = params;
    this.strokes = new StrokesPrimitivePointLists();
    this.isDisjoint = isDisjoint;
    this.isPlanar = isPlanar;
  }

  // ###TODO: public static clipToRange(input: StrokesPointLists, range: any);

  public transform(trans: Transform) {
    for (const strk of this.strokes) {
      trans.multiplyPoint3dArrayInPlace(strk.points);
    }
  }
}

export class StrokesPrimitiveList extends Array<StrokesPrimitive> { constructor(...args: StrokesPrimitive[]) { super(...args); } }
