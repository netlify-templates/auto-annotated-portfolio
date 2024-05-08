export type VisitorFunction = (value: any) => any;

export function deepMapObject(value: any, visitorFn: VisitorFunction) {
    if (Array.isArray(value)) {
        value = value.map((e) => {
            return deepMapObject(e, visitorFn);
        });
    } else if (typeof value == 'object') {
        const newObject = {};
        for (const [k, v] of Object.entries(value)) {
            newObject[k] = deepMapObject(v, visitorFn);
        }
        value = newObject;
    }
    value = visitorFn(value);
    return value;
}
