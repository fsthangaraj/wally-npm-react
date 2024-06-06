import React from 'react'

export default function Form() {
    return (
        <div>
            <p>Inputs without Label</p>
            <p>There are three radio inputs, not associated with any labels</p>
            <form>
                <input class="radioButton___qUguZ" data-e2e="Tall" id="Tall" name="size" type="radio" value="Tall" />
                <input checked="" class="radioButton___qUguZ" data-e2e="Grande" id="Grande" name="size" type="radio" value="Grande" />
                <input class="radioButton___qUguZ" data-e2e="Venti" id="Venti" name="size" type="radio" value="Venti" />
            </form>
        </div>
    )
}
