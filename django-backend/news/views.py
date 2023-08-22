from rest_framework import viewsets
from rest_framework.response import Response
from newsapi import NewsApiClient
from .serializers import NewsAPISerializer

# Need to move into env, but for demo placed it here
key = "7818348bfb9b4e68882aeb7490d02136"


class NewsAPIViewSet(viewsets.ViewSet):
    def list(self, request):
        serializer = NewsAPISerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True)
        news_api = NewsApiClient(api_key=key)
        query_params = serializer.validated_data
        top_headlines = news_api.get_everything(**query_params)

        return Response(top_headlines)
