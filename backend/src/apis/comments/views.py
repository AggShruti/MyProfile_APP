from rest_framework.generics import ListAPIView, CreateAPIView
from apis.models import Comments
from .serializers import CommentSerializer

#To got list of comments
class CommentListView(ListAPIView):
    queryset = Comments.objects.all().order_by('-timeStamp')
    serializer_class = CommentSerializer
#To Post a new comment
class CommentCreateView(CreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentSerializer