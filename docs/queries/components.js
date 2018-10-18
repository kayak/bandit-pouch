module.exports = graphql => graphql(`
query ComponentMetadataQuery {
  allComponentMetadata(sort: {
    fields: displayName
    order: ASC
  }) {
    edges {
      node {
        ...Component 
      }
    }
  }
}

fragment Description on ComponentDescription {
  text
}

fragment Method on ComponentMethod {
  name
  description
  docblock
  modifiers
  params {
    name
    type
  }
  returns
}

fragment Prop on ComponentProp {
  id
  name
  required
  docblock
  description {
    ...Description
  }
  defaultValue {
    value
    computed
  }
  parentType {
    name
  }
  type {
    name
    value
    raw
  }
}

fragment Component on ComponentMetadata {
  id
  displayName
  docblock
  doclets
  methods {
    ...Method
  }
  childrenComponentProp {
    ...Prop
  }
  description {
    ...Description
  }
}
`);
