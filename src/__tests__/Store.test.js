import configureMockStore from 'redux-mock-store';
import courseReducer, { initialState, setCourse } from '../store/CourseSlice';

const mockStore = configureMockStore();

describe('courseReducer', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should handle the initial state', () => {
    expect(courseReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle the ADD_COURSE action', () => {
    const course = { id: 1, name: 'Math' };
    const addAction = setCourse(course);

    expect(courseReducer(initialState, addAction)).toEqual({
      ...initialState,
      courses: [...initialState.courses, course],
    });
  });
});