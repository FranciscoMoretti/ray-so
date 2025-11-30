declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: {
    src: string;
    height: number;
    width: number;
  };
  export default content;
}

declare module "*.png" {
  const content: {
    src: string;
    height: number;
    width: number;
  };
  export default content;
}

declare module "*.jpg" {
  const content: {
    src: string;
    height: number;
    width: number;
  };
  export default content;
}

