import _ from "lodash";

type NamespaceHelper = {
	[ key: string ]: string;
};

export function removeNamespace(namespace: string, types: NamespaceHelper): NamespaceHelper {
	return _.reduce(types, (typeObj: NamespaceHelper, typeValue, typeName) => {
		typeObj[ typeName ] = typeValue.replace(namespace, '');
		return typeObj;
	}, {});
}
