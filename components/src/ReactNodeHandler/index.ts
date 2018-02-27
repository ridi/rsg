import * as React from 'react'
export class Handler {
  private node: JSX.Element

  constructor (node: JSX.Element) {
    this.node = node
  }

  private iterator ( { key, callback }: { key: string, callback: (node?: any) => any }, node: any = this.node): any {
    let props = {}
    const children = Array.isArray(node.props.children) ? [] : node.props.children;
    if (Array.isArray(children)) {
     React.Children.forEach(
      node.props.children,
      (child, i) => {
        children.push(this.iterator({ key, callback }, child))
      }
    )};

    const cloned = React.cloneElement(
      node,
      props,
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

  apeendChild (key: string, node: any): Handler {
    return this
  }

  prependChild (key: string, node: any): Handler {
    return this
  }

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
