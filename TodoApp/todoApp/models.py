from django.db import models
from django.utils.translation import ugettext_lazy as _

'''
This is model for buckets/Labels.
'''
class MyBucket(models.Model):
    class Types(models.TextChoices):
        NO  = 'No','no'
        YES = 'Yes','yes'
    bucket_name     = models.CharField(_('#Bucket Name'), max_length=50, blank=False, null=False)
    description     = models.TextField(_('About bucket'), max_length=100, blank=True, null=True)
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)
    is_completed    = models.CharField(_('is Completed?'),max_length=20, choices=Types.choices, default = Types.NO)

    def __str__(self):
        return self.bucket_name

class Todos(models.Model):
    class Types(models.TextChoices):
        NO  = 'No','no'
        YES = 'Yes','yes'
    bucket          = models.ForeignKey(MyBucket, on_delete=models.CASCADE, parent_link=True, related_name='mybucket')
    todos_name      = models.CharField(_('#to-do name'), max_length=50, blank=False, null=False)
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now=True)
    is_completed    = models.CharField(_('is Completed?'),max_length=20, choices=Types.choices, default = Types.NO)

    def __str__(self):
        return self.todos_name



