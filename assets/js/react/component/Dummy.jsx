import React from 'react';

type DummyProps = {
    text?: string
};

type DummyState = {
    text: string|null
};

export default class Dummy extends React.Component<DummyProps, DummyState>
{

    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text || null,
        }
    }

    render()
    {
        return (
            <div>{this.state.text}</div>
        )
    }

}
