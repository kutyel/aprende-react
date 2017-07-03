import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from './Main'
import * as actionCreators from '../actions/actionCreators'

const mapStateToProps = ({ posts, comments }) => ({ posts, comments })

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
