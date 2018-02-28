import * as React from 'react'
export class Handler {
  private node: JSX.Element

  constructor (node: JSX.Element) {
    this.node = node
  }

  private iterator (
    { key, callback }: { key: string, callback: (node?: any) => any },
    node: any = this.node
  ): any {
    if (!node) return node;

    let children: any;
    if (Array.isArray(node.props.children)) {
      children = []
      // Must use forEach instead of map due to key change issue
      // https://stackoverflow.com/questions/47028558/react-cloneelement-inside-react-children-map-is-causing-element-keys-to-change?rq=1
      React.Children.forEach(
        node.props.children,
        (child, i) => children.push(this.iterator({ key, callback }, child))
      )
    } else {
      children = node.props.children
    }

    const cloned = React.cloneElement(
      node,
      {},
      children,
    )

    return key === node.key ? callback(cloned) : cloned
  }

  insertBefore (key: string, node: any): Handler {
    this.node = this.iterator({ key, callback: cloned => [node, cloned] })
    return this
  }

  insertAfter (key: string, node: any): Handler {
    this.node = this.iterator({ key, callback: cloned => [cloned, node] })
    return this
  }

  prependChild (key: string, node: any): Handler {
    this.node = this.iterator({ key,
      callback: cloned => {
        return React.cloneElement(cloned);
      }
    })
    return this
  }

  // appendChild (key: string, node: any): Handler {
  //   this.node = this.iterator({ key,
  //     callback: cloned => {
  //       const { children } = cloned.props;
  //       return React.cloneElement(cloned, {}, Array.isArray(children) ? children.push(node) : [children, node]);
  //     }
  //   })
  //   return this
  // }

  replace (key: string, node: any): Handler {
    this.node = this.iterator({ key, callback: () => node })
    return this
  }

  setProps (key: string, props: object): Handler {
    this.node = this.iterator({ key, callback: cloned => React.cloneElement(cloned, props) })
    return this
  }

  remove (key: string): Handler {
    this.node = this.iterator({ key, callback: () => null })
    return this
  }

  result (): JSX.Element {
    return this.node
  }
}

export default function (node: any) {
  return new Handler(node)
}
