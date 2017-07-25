import {  connect } from 'react-redux';
import {  fetchCurrentProfile, updateProfile } from '../../actions/profile_actions';
import EssayDetail from './essay_detail';

const mapStateToProps = state => ({
  profile: state.currentProfile.currentProfile,
  currentUser: state.session.currentUser,
  summary: state.currentProfile.summary,
  five_foods: state.currentProfile.five_foods,
  three_faves: state.currentProfile.three_faves,
  daytime: state.currentProfile.daytime,
  hobbies: state.currentProfile.hobbies,
  friday: state.currentProfile.friday,
  message_if: state.currentProfile.message_if
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentProfile: user_id => dispatch(fetchCurrentProfile(user_id)),
  updateProfile: user => dispatch(updateProfile(user))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(EssayDetail);
