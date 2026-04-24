#!/usr/bin/env python3
""" 10-update_topics """


def update_topics(mongo_collection, name, topics):
    """ update topics for a school document based on the name """
    doc_update = mongo_collection.update_many({'name': name},
                                              {'$set': {'topics': topics}})
    return doc_update
