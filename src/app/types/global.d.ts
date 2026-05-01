declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "*.svg?react" {
    import * as React from "react";
    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;
    export default ReactComponent;
}

declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}
