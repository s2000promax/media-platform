import { bindActionCreators } from 'redux';
import ActionCreators from '@/store/action-creators';

export const useActions = () => {
  const dispatch: any = useActions();

  return bindActionCreators(ActionCreators, dispatch);
}
