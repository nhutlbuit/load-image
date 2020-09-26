import PropTypes from 'prop-types'

const Permission = (props) => {
    if (!props.hasAllPermission && !props.hasAnyPermission) return null
    if (props.hasAnyPermission) {
        if (!Permission.hasAnyPermission(...props.hasAnyPermission)) return null;
    } else {
        if (!Permission.hasAllPermission(...props.hasAllPermission)) return null;
    }
    return props.children;
}

const objPermission = window.parent?.$?.accessControlPermission;

Permission.hasAnyPermission = (...args) => {
    const listPermission = objPermission && Object.keys(objPermission).filter(key => objPermission[key]) || [];
    return args.length ? args.filter(item => listPermission && listPermission.includes(item)).length > 0 : true;
}

Permission.hasAllPermission = (...args) => {
    const listPermission = objPermission && Object.keys(objPermission).filter(key => objPermission()[key]) || [];
    return args.length ? args.filter(item => listPermission && listPermission.includes(item)).length == args.length : true;
}

Permission.propTypes = {
    hasAnyPermission: PropTypes.any,
    hasAllPermission: PropTypes.any,
}

export default Permission
