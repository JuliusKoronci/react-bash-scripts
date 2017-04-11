const getTemplate = (name) => {
	return (`// @flow
import React, { PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ${name}View from '../components/${name}View';
import ComponentLoader from '../../../components/molecules/ComponentLoader/ComponentLoader';
import { load${name}, loadMore${name}, load${name}Error } from '../actions/${name}Actions';

export class ${name} extends Component {
  static defaultProps = {};
  static propTypes = {
  	${name}Id: PropTypes.number.isRequired,
  };
  
    componentDidMount() {
		this.load${name}(this.props.${name}Id);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.${name}Id !== nextProps.${name}Id) {
			this.load${name}(nextProps.${name}Id);
		}
	}

	load${name}(${name}Id) {
		this.props.load${name}(${name}Id).catch((error) => {
			this.props.load${name}Error();
		});
	}

	loadNext = () => {
		const page = this.props.${name}.${name}.pageMetaData.page + 1;
		this.props.loadMore${name}(this.props.${name}Id, page);
	};

  render() {
		const { ${name} } = this.props;
		return (
			<ComponentLoader hasError={${name}.error} isLoading={${name}.isFetching}>
				<${name}View
					loadNext={this.loadNext}
					${name}={${name}.${name}}
				/>
			</ComponentLoader>
		);
	}
}

function _mapStoreToProps(state, ownProps) {
    return {${name}: state.${name}};
}
function _mapDispatchToProps(dispatch) {
    return bindActionCreators({ load${name}, loadMore${name}, load${name}Error }, dispatch);
}

export default connect(_mapStoreToProps, _mapDispatchToProps)(${name});

`
	);
};

export default getTemplate;
