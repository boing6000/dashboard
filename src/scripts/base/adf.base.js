angular.module('adf.structures.base', ['adf'])
    .config(function(dashboardProvider){

        dashboardProvider
            .structure('12', {
                rows: [{
                    columns: [{
                        styleClass: 'col-md-12'
                    }]
                }]
            })
            .structure('6-6', {
                rows: [{
                    columns: [{
                        styleClass: 'col-md-6'
                    }, {
                        styleClass: 'col-md-6'
                    }]
                }]
            })
            .structure('4-8', {
                rows: [{
                    columns: [{
                        styleClass: 'col-md-4',
                        widgets: []
                    }, {
                        styleClass: 'col-md-8',
                        widgets: []
                    }]
                }]
            })
            .structure('12/4-4-4', {
                rows: [{
                    columns: [{
                        styleClass: 'col-md-12'
                    }]
                }, {
                    columns: [{
                        styleClass: 'col-md-4'
                    }, {
                        styleClass: 'col-md-4'
                    }, {
                        styleClass: 'col-md-4'
                    }]
                }]
            })
            .structure('12/6-6', {
                rows: [{
                    columns: [{
                        styleClass: 'col-md-12'
                    }]
                }, {
                    columns: [{
                        styleClass: 'col-md-6'
                    }, {
                        styleClass: 'col-md-6'
                    }]
                }]
            })
            .structure('12/6-6/12', {
                rows: [{
                    columns: [{
                        styleClass: 'col-md-12'
                    }]
                }, {
                    columns: [{
                        styleClass: 'col-md-6'
                    }, {
                        styleClass: 'col-md-6'
                    }]
                }, {
                    columns: [{
                        styleClass: 'col-md-12'
                    }]
                }]
            })
            .structure('4-8 (6-6/12/4-4-4)', {
                rows: [{
                    columns: [{
                        styleClass: 'col-md-4'
                    }, {
                        styleClass: 'col-md-8',
                        rows: [{
                            columns: [{
                                styleClass: 'col-md-6'
                            },{
                                styleClass: 'col-md-6'
                            }]
                        }, {
                            columns: [{
                                styleClass: 'col-md-12'
                            }]
                        },{
                            columns: [{
                                styleClass: 'col-md-4'
                            },{
                                styleClass: 'col-md-4'
                            },{
                                styleClass: 'col-md-4'
                            }]
                        }]
                    }]
                }]
            })
            .structure('3-9 (12/6-6)', {
                rows: [{
                    columns: [{
                        styleClass: 'col-md-3'
                    }, {
                        styleClass: 'col-md-9',
                        rows: [{
                            columns: [{
                                styleClass: 'col-md-12'
                            }]
                        }, {
                            columns: [{
                                styleClass: 'col-md-6'
                            }, {
                                styleClass: 'col-md-6'
                            }]
                        }]
                    }]
                }]
            })
            .structure('3-9 (12/6-6/12)', {
                rows: [{
                    columns: [{
                        styleClass: 'col-md-3'
                    }, {
                        styleClass: 'col-md-9',
                        rows: [{
                            columns: [{
                                styleClass: 'col-md-12'
                            }]
                        }, {
                            columns: [{
                                styleClass: 'col-md-6'
                            }, {
                                styleClass: 'col-md-6'
                            }]
                        },{
                            columns: [{
                                styleClass: 'col-md-12'
                            }]
                        }]
                    }]
                }]
            });

    });