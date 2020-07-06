from rest_framework.generics import ListAPIView, CreateAPIView
from apis.models import Comments
from .serializers import CommentSerializer


class CommentListView(ListAPIView):
    queryset = Comments.objects.all().order_by('-timeStamp')
    serializer_class = CommentSerializer

class CommentCreateView(CreateAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentSerializer