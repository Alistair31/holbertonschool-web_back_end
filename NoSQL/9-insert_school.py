#!/usr/bin/env python3
""" 9-insert_school """


def insert_school(mongo_collection, **kwargs):
    """ insert documents in a collection """
    doc = {**kwargs}
    doc_insert = mongo_collection.insert_one(doc)
    return doc_insert.inserted_id
