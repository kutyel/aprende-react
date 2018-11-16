import { curry, pick } from 'ramda'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from './Main'
import * as actions from '../actions'

const mapStateToProps = pick(['posts', 'comments'])
const mapDispatchToProps = curry(bindActionCreators)(actions)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
