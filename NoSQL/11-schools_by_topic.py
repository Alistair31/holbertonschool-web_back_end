#!/usr/bin/env python3
""" 11-schools_by_topic """


def schools_by_topic(mongo_collection, topic):
    """"""
    list_by_topic = mongo_collection.find({"$regex": topic})
    return list_by_topic
