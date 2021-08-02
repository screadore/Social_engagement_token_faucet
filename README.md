Proof of Work Faucet
====================

<!-- MAGIC COMMENT: DO NOT DELETE! Everything above this line is hidden on NEAR Examples page -->

A cryptocurrency "faucet" is a site that gives away cryptocurrency. Faucets are especially common on test networks such as [NEAR TestNet](https://docs.near.org/docs/roles/developer/connecting) to allow developers to test apps with tokens which have no monetary value.

Faucets can run out of tokens, especially if people abuse them and purposely attempt to drain available funds. While test network tokens can be replenished one way or another, doing so can be a hassle, so it's useful to deter this sort of behavior.

To this end, some faucets require that token requests be accompanied by a post on Twitter. But it's easy for one person to spin up many fake Twitter accounts to drain a faucet. This sort of behavior would be classified as a [Sybil attack](https://bitcoin.stackexchange.com/questions/50922/whats-a-sybil-attack).

This demo uses a different approach.

First, each new account created with this faucet receives 1/1000 of the funds remaining at the time it was created.

Second, this faucet requires [Proof of Work](https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-proof-of-work): before the faucet creates your new account, you need to wait while the JavaScript on the page churns through some complex computation (in this demo, that specific computation is to compute a `u64` salt for a given account id + public key in such a way that the `sha256(account_id + ':' + public_key + ':' + salt)` has `min_difficulty` leading zeroes).


Try it out
==========

You can try out a live version of this demo: https://near-examples.github.io/pow-faucet/

This demo version creates new NEAR TestNet accounts with a `.meta` suffix.


Playing with the Code
=====================

The code lives in two different places:


Faucet Contract
---------------

The smart contract source code lives in the `contract-rs` folder, and specifically in `contract-rs/src/lib.rs`.

After you make changes, run tests by entering the `contract-rs` directory (`cd contract-rs`) and running:

    cargo test

To recompile the smart contract in preparation for deploying it, again enter the `contract-rs` directory and run:

    ./build.sh


Faucet Frontend
---------------

This contains the JavaScript that shows the UI and runs the proof-of-work algorithm. It lives in the `frontend` folder.

It was bootstrapped with [`create-react-app`](https://create-react-app.dev). Check out the README in the `frontend` folder to learn how to play with the code.


Deploying
=========

The Contract and the Frontend need to be deployed separately.

* See instructions on [docs.near.org](https://docs.near.org) for how to [deploy the contract to the NEAR blockchain](https://docs.near.org/docs/tutorials/intro-to-rust#finally-test-compile-and-deploy-).
* The frontend compiles to static assets – HTML, CSS, and JavaScript. The demo frontend is deployed to GitHub Pages using [gh-pages](https://www.npmjs.com/package/gh-pages). Feel free to re-use this approach or [find another](https://www.slant.co/topics/2256/~best-static-website-hosting-provider).


See Also
========

As a follow-up to this demo, we created a [Proof of Work Transfer Faucet](https://github.com/near-examples/token-printer). This "Transfer Faucet" differs from the current example in two main ways:

1. Rather than create a new account, it sends NEAR Tokens to an existing account
2. Rather than send 1/1000th of the remaining funds, it always sends 100Ⓝ


Data collection
===============

By using Gitpod in this project, you agree to opt-in to basic, anonymous analytics. No personal information is transmitted. Instead, these usage statistics aid in discovering potential bugs and user flow information.
