from rest_framework.generics import ListAPIView, RetrieveAPIView
from apis.models import Profiles
from .serializers import ProfileSerializer


class ProfileListView(ListAPIView):
    queryset = Profiles.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetailView(RetrieveAPIView):
    queryset = Profiles.objects.all()
    serializer_class = ProfileSerializer
