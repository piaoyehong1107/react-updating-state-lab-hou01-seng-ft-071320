// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    state={
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
      changeBitrate=()=>{
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
          });
      }
      changeReso=()=>{
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                ...this.state.settings.video,
                resolution: '720p'
              }
            }
          });
    }
    render() {
        console.log(this.state.settings.bitrate)
        return (
            <div>
              <button className='bitrate' onClick={
                  this.changeBitrate}>
                {this.state.settings.bitrate}
              </button>
              <button className='resolution' onClick={
                  this.changeReso}>
                {this.state.settings.video.resolution}
              </button>
            </div>
        )
    }
}
