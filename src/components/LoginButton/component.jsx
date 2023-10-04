"use client";

import styles from './styles.module.css';
import classNames from "classnames";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../Button/component.jsx";
import { LoginForm } from "../LoginForm/component.jsx";
import { selectCurrentUser } from "@/store/features/authorization/selectors.js";
import { authorizationSlice } from "@/store/features/authorization/index.js";
import { restoreItems } from '@/utils/local-storage';



export const LoginButton = () => {
  const [isModalOpened, setIsModalOpened] = useState();
  const dispatch = useDispatch();

  let currentUser = useSelector(selectCurrentUser);
  
  return (
    <>
      <div className={classNames(styles.root)}>
        {currentUser && <span>{currentUser}</span>}
        <Button
          onClick={() => {   
            if (typeof window !== 'undefined') {
              dispatch(authorizationSlice.actions.initial());
            }
            if(!currentUser) {
              document.body.style.overflow = "hidden";
              document.querySelector('.main').style.opacity = "0.2";
              setIsModalOpened(true);
            } else {
              dispatch(authorizationSlice.actions.logout());
            } 
          
          }}
          type="authoriazation"
        >
          {currentUser ? "Log Out" : "Log In"}
        </Button>
      </div>

      {isModalOpened &&
        createPortal(
          <LoginForm onLogin={() => setIsModalOpened(false)} />,
          document.getElementById("modal-container")
        )}
    </>
  );
};
