var data = [{ ID: 1, CustomerID: 'VINET', Freight: 32.38, OrderDate: new Date(8364186e5) },
            { ID: 2, CustomerID: 'TOMSP', Freight: 11.61, OrderDate: new Date(836505e6) },
            { ID: 3, CustomerID: 'HANAR', Freight: 65.83, OrderDate: new Date(8367642e5) },
            { ID: 4, CustomerID: 'VICTE', Freight: 41.34, OrderDate: new Date(8368506e5) },
           ];




ej.grids.Grid.Inject(ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
                { field: 'ID', headerText: 'ID', textAlign: 'Right', width: 100, type: 'number' },
                {
                    field: 'CustomerID', headerText: 'Quote', textAlign: 'Center', template:'#templateImg'
                },
                
    ],
    
  
    });

grid.appendTo('#Grid');