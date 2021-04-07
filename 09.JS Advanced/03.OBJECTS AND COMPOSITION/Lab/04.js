const factory = (library, orders) => orders.map(ordrer => Object.assign({}, ordrer.template, ordrer.parts.reduce((a, c) => Object.assign(a, {[c]: library[c]}), {})))
