from rest_framework import serializers
from .models import (
    MyBucket,
    Todos
)

class MyBucketSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyBucket
        fields = '__all__'
        #ordering = ['-id']


class TodosSerializer(serializers.ModelSerializer):
    bucket = serializers.PrimaryKeyRelatedField(queryset=MyBucket.objects.all())

    class Meta:
        model =  Todos
        fields = '__all__'
        #ordering = ['-id']
