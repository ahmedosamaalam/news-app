from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsAPIViewSet

router = DefaultRouter()
router.register(r'get-news', NewsAPIViewSet, basename='news')

urlpatterns = [
    path('news/', include(router.urls)),

]
