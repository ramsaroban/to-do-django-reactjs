from django.contrib import admin
from .models import (
    MyBucket,
    Todos
)

class MYbucketAdmin(admin.ModelAdmin):
    list_display = ['bucket_name','created_at','updated_at']
    search_field = ['bucket_name']
admin.site.register(MyBucket,MYbucketAdmin)
admin.site.register(Todos)
