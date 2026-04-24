#!/usr/bin/env python3
""" 11-schools_by_topic """


def schools_by_topic(mongo_collection, topic):
    """ return the list of school having a specific topic """
    list_by_topic = mongo_collection.find({"topics": {"$elemMatch": {"$regex": topic}}})
    return list_by_topic
