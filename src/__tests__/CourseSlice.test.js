import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { fetchCourses, setCourse, setStatus } from './CourseSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('CourseSlice', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should fetch courses and update state', async () => {
    const courses = [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }];
    fetchMock.getOnce('http://localhost:3000/courses', { body: courses });

    const expectedActions = [
      setStatus('loading'),
      setCourse(courses),
      setStatus('idle')
    ];

    const store = mockStore({});

    await store.dispatch(fetchCourses());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should handle error when fetching courses', async () => {
    const error = new Error('Failed to fetch courses');
    fetchMock.getOnce('http://localhost:3000/courses', { throws: error });

    const expectedActions = [setStatus('loading'), setStatus('error')];

    const store = mockStore({});

    await store.dispatch(fetchCourses());

    expect(store.getActions()).toEqual(expectedActions);
  });
});