@foreach ($students as $student)
<tr id="{{ $student->id }}">
    <td id="no">{{ $loop->iteration }}</td>
    <td style="display:none;">{{ $student->id }}</td>
    <td>{{ $student->fname }}</td>
    <td>{{ $student->lname }}</td>
    <td>
        <form method="post">
            {{-- @csrf --}}
            <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">
            @method('delete')
            <a href="#" class="btn btn-success edit" id="edit" data-id="{{ $student->id }}">Edit</a>
            <a href="#" class="btn btn-danger delete" id="delete" data-id="{{ $student->id }}">Delete</a>
            <a href="#" class="btn btn-primary view" id="view" data-id="{{ $student->id }}">View</a>
        </form>

    </td>
</tr>
@endforeach