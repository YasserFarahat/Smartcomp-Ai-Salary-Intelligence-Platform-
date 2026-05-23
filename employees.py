from fastapi import APIRouter

router = APIRouter(prefix="/employees")

@router.get("/")
def get_employees():
    return [{"id":1,"name":"Ahmed"}]
