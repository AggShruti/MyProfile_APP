from django.urls import path

from .views import CommentListView,CommentCreateView
#Path for Retrieving all comments and push a new comment
urlpatterns = [
    path('', CommentListView.as_view()),
    path('create/', CommentCreateView.as_view())
]
