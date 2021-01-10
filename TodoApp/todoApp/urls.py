from django.urls import path
from rest_framework import routers
from .views import (
    MyBucketViews,
    TodosViews
)


app_name = 'todoApp'

router = routers.SimpleRouter()
router.register('my-bucket',MyBucketViews)
router.register('to-dos', TodosViews)

urlpatterns = []
urlpatterns += router.urls