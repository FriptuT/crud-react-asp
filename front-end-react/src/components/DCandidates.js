import React , {  useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";



function DCandidates(props) {  
  useEffect(() => {

    props.fetchAllDCandidates()
  }, [props]);

  return (<div>from DCandidates</div>);
}

const mapStateToProps = state => ({
  dCandidateList: state.dCandidate.list
});

const mapActionToProps = {
  fetchAllDCandidates: actions.fetchAll
}

export default connect(mapStateToProps,mapActionToProps)(DCandidates);
