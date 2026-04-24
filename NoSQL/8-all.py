#!/usr/bin/env python3
""" 8-all """


def list_all(mongo_collection):
    """ list all documents in a collection"""
    documents = list(mongo_collection.find())
    return documents
