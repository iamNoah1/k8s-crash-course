# Kubernetes Crash Course 

This repo contains content that can be used to learn how to use Kubernetes. 

## How to use this repo 
On the main branch, the project is completely empty. Go through the steps mentioned below. You will find solutions for each step on the respective branch (`step-n-solution`)

## Prerequisites
* `kubectl` installed
* Tool for making requests (postman, insomnia, curl)

## step 0 - Create a Cluster 
In this step we are going to create the kubernetes cluster, that we use to learn to deploy applications on Kubernetes

Hint: There are several ways how to create a cluster, the simplest one is to use Docker Desktop and enable the Kubernetes feature. But it is totally up to you how to spin up your cluster. 

## step 1 - Connect & First play around
In this step we connect to the cluster using `kubectl` and play a little bit around: 

Do the following:
* `show namespaces`
* `create new namespace` 
* `create a pod running nginx` 
* `show logs`
* `delete pod again`

## step 2 - Resilience
In this step we need to create something that is more resilient than our nginx server from the last step. 

Deploy an nginx server or any other image (i.e [iamnoah4real/saywhat](https://github.com/iamNoah1/saywhat)) in a resilient way. Resilience means that when the pod gets killed or the application crashes, Kubernetes will spin it up again. 

## step 3 - Expose your Application
Now, we want to expose our application. Being it a simple nginx server, the saywhat nodejs thing or anything you want to. There are several ways to achieve this, so to get the most out this, you could find all different ways and try them :) 

The goal is simply, make it possible to access the deployed application from your machine. 

## step 4 - Todo App - Disk persistance
In this step we are going to deploy a super simple todo application, that stores data on it's filesystem. 

These are your tasks: 
* Deploy the app (iamnoah4real/todos-disk)
* Expose the application to access it via your laptop
* Test the app by calling the endpoints 

## step 5 - Scaling
Let's Scale the app. To at least 2 instances. What is happening now? Houston, do we have problem? 

## step 6 - Persistent Volumes
In this step we should create a persistent volume and attach it to our application. 

## step 7 - Switch to Database persistence
To be honest, there are more sophisticated ways to implement persistence for an application than storing data in a file on the disk, right? Let's use a database. 

Your challenge: 
* Deploy a Mongodb to your K8s cluster 
* Deploy the modified version of the app which stores data in the db (iamnoah4real/todos-db)

