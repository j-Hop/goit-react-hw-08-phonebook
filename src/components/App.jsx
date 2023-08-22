import { lazy } from 'react';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthentificated,
  selectToken,
} from 'redux/authentificated/authSelectors';
import { refreshUser } from 'redux/authentificated/operations';
import { useEffect } from 'react';
import UserMenu from './UserMenu/UserMenu';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import {
  StyledCont,
  StyledHeader,
  StyledMain,
  StyledNav,
  StyledNavLink,
} from './App.styled';

const HomePage = lazy(() => import('page/HomePage/HomePage'));
const ContactsPage = lazy(() => import('page/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('page/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('page/RegisterPage/RegisterPage'));

export const App = () => {
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || authentificated) return;
    dispatch(refreshUser());
  }, [token, dispatch, authentificated]);

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {authentificated ? (
            <StyledCont>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <UserMenu />
            </StyledCont>
          ) : (
            <div>
              <StyledNavLink to="/register">Register</StyledNavLink>
              <StyledNavLink to="/login">Login</StyledNavLink>
            </div>
          )}
        </StyledNav>
      </StyledHeader>
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </StyledMain>
    </>
  );
};
