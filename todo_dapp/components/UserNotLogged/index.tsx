import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Router from "next/router";

// import type { NextPage } from "next";
import { useEffect } from "react";

import { UAuthConnector } from '@uauth/web3-react'
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import type { AbstractConnector } from '@web3-react/abstract-connector'

import React from 'react'
import connectors, { uauth } from '../../contexts/connectors'

const useStyles = makeStyles(() => ({
  title: {
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: "40%",
    padding: "15px 20px",
  },
  info: {
    color: "var(--accents-3)",
  },
}));

function UserNotLogged() {
  const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });

  const { chainId, account, activate, active, library } = useWeb3React<
    Web3Provider
  >();

  function createConnectHandler(connectorId: string) {
    return async () => {
      try {
        const connector = connectors[connectorId]

        // Taken from https://github.com/NoahZinsmeister/web3-react/issues/124#issuecomment-817631654
        if (
          connector instanceof WalletConnectConnector &&
          connector.walletConnectProvider?.wc?.uri
        ) {
          connector.walletConnectProvider = undefined
        }

        await activate(connector)
      } catch (error) {
        console.error(error)
      }
    }
  }


  // const uauthConnector = new UAuthConnector({})

  // uauthConnector.uauth.user().then().catch()
  // console.log(uauth.user());


  const onClick = () => {
    activate(injectedConnector);
  };

  useEffect(() => {
    console.log(chainId, account, active);
  });

  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid className={classes.container}>
        <h1 className={classes.title}>You&apos;re not logged</h1>
        <img width="40%" src="/login.svg" alt="cowork" />
        <Button
          onClick={() => Router.push("/login")}
          // onClick={onClick}
          className={classes.loginButton}
          variant="contained"
          color="primary"
        >
          <span>Login</span>
        </Button>
        <>
          {Object.keys(connectors).map(v => (
            <button key={v} onClick={createConnectHandler(v)}>
              Connect to {v}
            </button>
          ))}
        </>
        <p className={classes.info}>
          Join to Nextjs TODO List and planning your pending tasks.
        </p>
        <p className={classes.info}>You can assign a tasks to your team.</p>
      </Grid>
    </Container>
  );
}

export default UserNotLogged;
