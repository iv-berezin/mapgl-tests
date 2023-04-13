import { Handler } from '../handler';
import { HandlerState, HandlerAction } from '../../types';
/**
 * Переходы в Initial состояние:
 *  1. MouseDrag -> mouseup при левой кнопке мыши -> Initial;
 *  2. MouseDrag -> mouseout с контейнера карты -> Initial;
 *  3. MouseDown -> mousedown не на левую кнопку мыши, затем mouseup от левой кнопки мыши -> Initial
 *     (при таком сценарии браузер не бросает событие click);
 *  4. MouseDown -> click -> Initial;
 *  5. PitchRotateMouseDown -> mouseup при левой кнопке мыши + Ctrl/Meta, правой кнопке мыши или колесе -> Initial;
 *  6. MousePitchRotate -> mouseleave c document'а -> Initial;
 *  7. MousePitchRotate -> mouseup при левой кнопке мыши + Ctrl/Meta, правой кнопке мыши или колесе -> Initial;
 *  8. MousePitchRotate -> mouseout с контейнера карты -> Initial;
 *  9. TouchDown (type: single) -> touchend с touches нулевой длины -> Initial;
 *  10. TouchDown (type: multiple) -> touchend с touches нулевой длины -> Initial;
 *  11. TouchDrag -> touchend -> Initial;
 *  12. TouchZoomRotate -> touchend с touches нулевой длины -> Initial;
 *  13. TouchPitch -> touchend с touches нулевой длины -> Initial;
 *  14. TouchZoom -> touchend -> Initial;
 */
export declare class Initial implements HandlerState {
    private handler;
    constructor(handler: Handler);
    processAction(action: HandlerAction): HandlerState;
    private processMouseDownAction;
    private processTouchStartAction;
}
