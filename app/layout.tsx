'use client';
import {useEffect} from "react";

export default function RootLayout({ children }) {
    useEffect(() => {
        interface ChildInterface {
            text: string;
        }
        interface ItemInterface {
            children?: ChildInterface[];
        }

        const children: ChildInterface[] = [];
        const item: ItemInterface = { children: children };

        const addChild = (arg: ItemInterface) => {
            arg.children?.push({ text: "text" });
        };

        // eslint-disable-next-line no-unused-vars
        const executeOnItem = (method: (v: ItemInterface[]) => void, arg: ItemInterface[]) => {
            method(arg);
        };
        executeOnItem(v => addChild(v[0]), [item]);
        console.log(children[0]?.text);
    }, []);

  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
