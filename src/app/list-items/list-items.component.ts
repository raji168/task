import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListItemApiServiceService } from '../list-items-api.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
  providers: [ListItemApiServiceService]
})
export class ListItemsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];

  dataSource : MatTableDataSource<Data>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service : ListItemApiServiceService){
  }

  
sampleData: any;

  ngOnInit(): void {
    this.service.getData().then(data => {
      this.dataSource = data;
      this.sampleData = data;
    });
  }

  ngAfterViewInit() {
    console.log(this.sampleData )
    this.dataSource = new MatTableDataSource(this.sampleData || []);
    this.dataSource.paginator = this.paginator;
  }
}

export interface Data {
  userId: string;
  Id: number;
  title: number;
  completed: boolean;
}


