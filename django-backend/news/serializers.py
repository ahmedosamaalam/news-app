from rest_framework import serializers


class NewsAPISerializer(serializers.Serializer):
    q = serializers.CharField(required=True)
    language = serializers.CharField(required=True)
