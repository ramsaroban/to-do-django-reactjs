from .serializers import (
    MyBucketSerializer,
    TodosSerializer
)

from .models import (
    MyBucket,
    Todos
)

from rest_framework import viewsets
from rest_framework.exceptions import MethodNotAllowed

class MyBucketViews(viewsets.ModelViewSet):
    queryset = MyBucket.objects.all()
    serializer_class = MyBucketSerializer
    http_methods_name = ['get','post','put','delete']


class TodosViews(viewsets.ModelViewSet):
    queryset = Todos.objects.all()
    serializer_class = TodosSerializer
    http_methods_name = ['get','post','put','delete']